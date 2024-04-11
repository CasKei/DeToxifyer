import sys

def translate(input_text):
    # Your translation logic here
    translated_text = input_text[::-1]  # Reversing the input text as a placeholder

    # Your toxicity scoring logic here
    toxicity_score = len(input_text) * 0.1  # Placeholder for toxicity score

    return translated_text, toxicity_score

if __name__ == "__main__":
    input_text = sys.argv[1]
    translated_text, toxicity_score = translate(input_text)
    print(f"{translated_text},{toxicity_score}")