from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
tokenizer = AutoTokenizer.from_pretrained("s-nlp/bart-base-detox")
model = AutoModelForSeq2SeqLM.from_pretrained("s-nlp/bart-base-detox")
model.to(device)
model.eval()

def detox(text):
    # 'that sick fuck is going to be out in 54 years.', 
    toxics = [text]
    tokens = tokenizer(toxics, return_tensors='pt', padding=True).to(device)
    tokens = model.generate(**tokens, num_return_sequences=5, do_sample=False,
                            temperature=1.0, repetition_penalty=10.0,
                            max_length=128, num_beams=10)
    neutrals = tokenizer.decode(tokens[0, ...], skip_special_tokens=True)
    # print(neutrals) # stdout: She is going to be out in 54 years.
    return neutrals