# DeToxifyer

## Abstract
Whether by design or inadvertently, toxic statements have permeated online discourse, creating environments that are hostile, negative and unsafe. Such content not only creates problems in the digital space but also spills over into real-world consequences, exacerbating issues like cyberbullying and social conflict. While social media platforms typically employ moderators to police content, their efficacy often falls short. These moderators struggle to discern the subtleties of language and context, leading to a failure to adequately distinguish between toxic and non-toxic communication.

## Objective
The focus of this project is to investigate the detection of toxicity in shorter pieces of text, such as texts and tweets, by leveraging existing AI models. The primary objective is to develop a system capable of analysing these short texts, and assigning a toxicity score, which quantifies the degree of toxicity present in the given piece of text. Once a toxicity score is obtained, it can be compared against a predefined threshold. In instances where the toxicity exceeds this threshold, the system will employ a 'translation' mechanism to convert the toxic statement into a non-toxic form, thereby mitigating the potential harm caused by the original content.

## Getting Started
Clone the repository
```git clone https://github.com/CasKei/DeToxifyer.git```

## Requirements
1. Install the dependencies: `pip install -r requirements.txt`
2. Ensure that the relevant pt files exist before loading or running model
3. For running the web application, run the server before the frontend code. Refer to server/README.md for more detailed instructions.
4. When running the code or model, check if the model is loaded corrrectly (pt file in detox.py and ourDetox.py) via the file path of the saved model, as well as instantiating running python with the correct version (under server.js spawn python process, directory to the python kernel)
5. Some of the pt files might not be in the repo due to the large file size if you were to clone straight from the repo. However you can obtain the pt files by running the Jupyter notebook associated with the training of the model. 

## Project Structure
DeToxifyer
├── dataset/ (contains mainly Jupyter notebooks to train models)
├── frontend/ (contains files for running the frontend of the web application)
├── trainedModels/ (contains trained models to load)
├── server/ (contains files for running server backend for the web application)
├── requirements.txt
└── README.md