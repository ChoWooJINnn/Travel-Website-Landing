document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inquiry-form');
    const inquiryList = document.getElementById('inquiry-list');
    const clearStorageButton = document.getElementById('clear-storage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        const inquiry = {
            id: Date.now(), // 고유 ID 생성
            title: title,
            content: content,
            status: '접수' // 초기 상태 설정
        };

        saveInquiry(inquiry); // 데이터 저장
        displayInquiries(); // 목록 갱신
        form.reset(); // 폼 초기화
    });

    clearStorageButton.addEventListener('click', () => {
        localStorage.clear(); // 로컬 스토리지 전체 삭제
        displayInquiries(); // 목록 갱신
    });

    function saveInquiry(inquiry) {
        let inquiries = getInquiries();
        inquiries.push(inquiry);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
    }

    function getInquiries() {
        let inquiries = localStorage.getItem('inquiries');
        return inquiries ? JSON.parse(inquiries) : [];
    }

    function displayInquiries() {
        inquiryList.innerHTML = '';
        let inquiries = getInquiries();
        inquiries.forEach(inquiry => {
            let li = document.createElement('li');
            li.innerHTML = `<div class="inquiry-title">${inquiry.title}</div>
                            <div>${inquiry.content}</div>
                            <div>상태: ${inquiry.status}</div>
                            <button class="delete-button" data-id="${inquiry.id}">삭제</button>`;
            inquiryList.appendChild(li);
        });

        // 삭제 버튼에 이벤트 리스너 추가
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                deleteInquiry(Number(id));
            });
        });
    }

    function deleteInquiry(id) {
        let inquiries = getInquiries();
        inquiries = inquiries.filter(inquiry => inquiry.id !== id);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        displayInquiries();
    }

    displayInquiries();
});
