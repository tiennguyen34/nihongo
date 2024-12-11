let vocabularyTopics = {}; // Biến lưu trữ từ vựng
let currentPage = 0; // Trang hiện tại
let wordsPerPage = 5; // Số từ mỗi trang
let currentVocabulary = []; // Danh sách từ hiện tại


// Hàm tải dữ liệu từ tệp JSON
async function loadVocabularyData() {
    const response = await fetch('js/tu_vung.json'); // Đường dẫn đến tệp JSON
    if (!response.ok) {
        throw new Error('Failed to load vocabulary data');
    }
    vocabularyTopics = await response.json(); // Lưu dữ liệu vào biến
}

// Hàm hiển thị các chủ đề
function showTopics() {
    const topicSelect = document.getElementById('topicSelect');
    Object.keys(vocabularyTopics).forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });
}
function resetToInitialState() {
    const topicSelectContainer = document.getElementById('topicSelectContainer');
    const backButton = document.getElementById('backButton');
    const topicTitle = document.getElementById('topicTitle');
    const vocabularyList = document.getElementById('vocabularyList');
    const vocabularySection = document.getElementById('vocabularySection');

    // Hiển thị thanh chọn chủ đề và ẩn các phần liên quan
    topicSelectContainer.style.display = 'block';
    backButton.style.display = 'none';
    vocabularySection.style.display = 'none';

    // Xóa nội dung tiêu đề và danh sách từ vựng
    topicTitle.textContent = '';
    vocabularyList.innerHTML = '';

    // Đặt lại giá trị chọn của dropdown
    document.getElementById('topicSelect').value = '';
}

// Hàm hiển thị từ vựng theo chủ đề
function displayVocabulary() {
    const selectedTopic = document.getElementById('topicSelect').value;
    const topicSelectContainer = document.getElementById('topicSelectContainer');
    const backButton = document.getElementById('backButton');
    const topicTitle = document.getElementById('topicTitle'); // Tiêu đề chủ đề

    if (selectedTopic) {
        if (!vocabularyTopics[selectedTopic]) {
            alert("Không tìm thấy dữ liệu cho chủ đề này!");
            return;
        }

        currentVocabulary = vocabularyTopics[selectedTopic];
        if (currentVocabulary.length === 0) {
            alert("Không có từ vựng nào trong chủ đề này.");
            return;
        }

        // Cập nhật tiêu đề với chủ đề hiện tại
        topicTitle.textContent = `${selectedTopic}`;

        currentPage = 0;
        updateVocabularyDisplay();

        // Ẩn thanh chọn chủ đề và hiển thị nút quay lại
        topicSelectContainer.style.display = 'none';
        backButton.style.display = 'block';
        document.getElementById('vocabularySection').style.display = 'block';
    } else {
        alert("Vui lòng chọn một chủ đề.");
    }
}
document.getElementById('backButton').addEventListener('click', resetToInitialState);
function updateVocabularyDisplay() {
    const vocabularyList = document.getElementById('vocabularyList');
    vocabularyList.innerHTML = ''; // Xóa danh sách hiện tại

    const startIndex = currentPage * wordsPerPage;
    const endIndex = Math.min(startIndex + wordsPerPage, currentVocabulary.length);

    for (let i = startIndex; i < endIndex; i++) {
        const item = currentVocabulary[i];
        const listItem = document.createElement('li');
        listItem.className = "vocabulary-item";

        // Hình ảnh minh họa
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.word;
        img.className = "vocabulary-image";

        // Nội dung từ vựng
        const text = document.createElement('div');
        text.className = "vocabulary-text";
        text.textContent = `${item.word} - ${item.pronunciation} - ${item.meaning}`;

        listItem.appendChild(img);
        listItem.appendChild(text);
        vocabularyList.appendChild(listItem);
    }

    // Cập nhật trạng thái nút
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage >= Math.ceil(currentVocabulary.length / wordsPerPage) - 1;
}
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateVocabularyDisplay();
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentPage < Math.ceil(currentVocabulary.length / wordsPerPage) - 1) {
        currentPage++;
        updateVocabularyDisplay();
    }
});
document.getElementById('backButton').addEventListener('click', () => {
    const topicSelectContainer = document.getElementById('topicSelectContainer');
    const backButton = document.getElementById('backButton');
    const vocabularySection = document.getElementById('vocabularySection');

    // Hiển thị thanh chọn chủ đề và ẩn nút quay lại
    topicSelectContainer.style.display = 'block';
    backButton.style.display = 'none';

    // Ẩn phần hiển thị từ vựng
    vocabularySection.style.display = 'none';
});

// Gọi hàm để tải dữ liệu và hiển thị các chủ đề
loadVocabularyData().then(showTopics);

// Lắng nghe sự kiện chọn chủ đề
document.getElementById('topicSelect').addEventListener('change', displayVocabulary);
async function loadVocabularyData() {
    try {
        const response = await fetch('js/tu_vung.json');
        if (!response.ok) {
            throw new Error(`Lỗi tải dữ liệu: ${response.status}`);
        }
        vocabularyTopics = await response.json();
        console.log("Dữ liệu từ vựng đã được tải:", vocabularyTopics);
    } catch (error) {
        console.error("Không thể tải dữ liệu từ vựng:", error);
        alert("Lỗi tải dữ liệu. Vui lòng kiểm tra tệp JSON và đường dẫn.");
    }
    
}

