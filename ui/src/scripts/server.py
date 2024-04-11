from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def translate():
    input_text = request.json['inputText']
    process = subprocess.Popen(['python', 'translate.py', input_text], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()

    if process.returncode == 0:
        output_data = output.decode().strip().split(',')
        translated_text = output_data[0]
        toxicity_score = float(output_data[1])
        return jsonify({'translatedText': translated_text, 'toxicityScore': toxicity_score})
    else:
        error_message = error.decode().strip()
        return jsonify({'error': error_message}), 500

if __name__ == '__main__':
    app.run()