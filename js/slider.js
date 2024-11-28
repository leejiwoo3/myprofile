let currentIndex = 0; // 현재 표시되는 이미지의 인덱스

// 이미지 데이터 배열
const images = [
    { src: 'images/work1.jpg', title: '팬덤 콘텐츠 앱 UI/UX', date: '2024.11.01', description: '작품 1 설명' },
    { src: 'images/work2.jpg', title: '작품 2', date: '2024.11.02', description: '작품 2 설명' },
    { src: 'images/work3.jpg', title: '작품 3', date: '2024.11.03', description: '작품 3 설명' },
    { src: 'images/work4.jpg', title: '작품 4', date: '2024.11.04', description: '작품 4 설명' },
    { src: 'images/work5.jpg', title: '작품 5', date: '2024.11.05', description: '작품 5 설명' },
];

// 모달 열기 함수
function openModal(index) {
    currentIndex = index;
    const modal = document.querySelector('.modal');
    
    // 이미지 및 텍스트 업데이트
    updateModalContent();
    
    // 모달 표시
    modal.style.display = 'flex';
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

// 모달 내용 업데이트 함수
function updateModalContent() {
    const modalTitle = document.querySelector('.modal-header h1');
    const modalDate = document.querySelector('.modal-header p:nth-child(2)');
    const modalDescription = document.querySelector('.modal-body p');
    const modalImage = document.querySelector('.modal-body img');
    
    // 데이터 업데이트
    modalTitle.textContent = images[currentIndex].title;
    modalDate.textContent = images[currentIndex].date;
    modalDescription.textContent = images[currentIndex].description;
    modalImage.src = images[currentIndex].src;
}

// 이전 이미지 표시
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
}

// 다음 이미지 표시
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
}

const closeButton = document.querySelector('.close-button');
const prevButton = document.querySelector('button.prev');
const nextButton = document.querySelector('button.next');
const modal = document.querySelector('.modal');

closeButton.addEventListener('click', closeModal);
prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});
