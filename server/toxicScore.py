from transformers import BertForSequenceClassification, BertTokenizer
import torch

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
# print(device)

model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
model.load_state_dict(torch.load('bertStateDict.pt', map_location=device))
model.to(device)
model.eval()

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

def predict_toxicity(text):
    inputs = tokenizer(text, padding=True, truncation=True, max_length=128, return_tensors='pt')
    input_ids = inputs['input_ids'].to(device)
    attention_mask = inputs['attention_mask'].to(device)
    
    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_mask)
        logits = outputs.logits
        probabilities = torch.softmax(logits, dim=1)
        predicted_class = torch.argmax(probabilities, dim=1)
        
        toxicity_score = probabilities[0][1].item() * 100
        
    return predicted_class.item(), toxicity_score