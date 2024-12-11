import pandas as pd
import json

# Đọc file Excel
df = pd.read_excel("traffic.xlsx", engine='openpyxl')

# Tạo cấu trúc dữ liệu cho JSON
data = {}
for _, row in df.iterrows():
    topic = row['Chủ đề']
    word_data = {
        "word": row['KANJI'],
        "meaning": row['Y NGHIA'],
        "pronunciation": row['CACH DOC'],
        "image": row['images'] 
    }
    if topic not in data:
        data[topic] = []
    data[topic].append(word_data)

# Ghi ra file JSON
with open("tu_vung.json", "w", encoding="utf-8") as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=4)

print("変更成功")
