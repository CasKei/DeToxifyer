from transformers import BartForConditionalGeneration, BartTokenizer
import torch
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForConditionalGeneration.from_pretrained("facebook/bart-base")
model.load_state_dict(torch.load("bartDetox4000.pt", map_location=device), strict=False)
# model.load_state_dict(torch.load("bartDetox200.pt", map_location=device), strict=False)
model.to(device)
model.eval()

def ourdetox(text):
    toxics = [text]
    tokens = tokenizer(toxics, return_tensors='pt', padding=True).to(device)
    tokens = model.generate(**tokens, num_return_sequences=5, do_sample=False,
                            temperature=1.0, repetition_penalty=10.0,
                            max_length=128, num_beams=10)
    neutrals = tokenizer.decode(tokens[0, ...], skip_special_tokens=True)
    return neutrals
