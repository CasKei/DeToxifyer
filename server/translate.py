import sys
from toxicScore import predict_toxicity
from detox import detox
from ourDetox import ourdetox
import re 
def translate(input_text):
    # Your translation logic here
    # cleaned_input_text = re.sub('\W+','', input_text)
    # translated_text = detox(input_text)
    translated_text = ourdetox(input_text)
    # Your toxicity scoring logic here
    class_item, toxicity_score = predict_toxicity(input_text)

    return translated_text, toxicity_score
    # return 'test', 1

if __name__ == "__main__":
    # input_text = input("Give text:")
    input_text = sys.argv[1]
    translated_text, toxicity_score = translate(input_text)
    print(f"{translated_text},{toxicity_score}")