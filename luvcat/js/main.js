document.addEventListener('DOMContentLoaded', () => {
    
    const allMenu = document.getElementById('allMenu');

    document.querySelector('.menuButton').addEventListener('click', function () {
        allMenu.classList.add('open');
     });

    document.querySelector('.closeBtn').addEventListener('click', function () {
        allMenu.classList.remove('open');
    });
});

function nextPage(type) {
    switch (type) {
        case 'first' : 
            document.querySelector('.first').style.display = 'none';
            document.querySelector('.sec01').style.display = 'flex'

            break;

        case '1' :
            document.querySelector('.first').style.display = 'none';
            document.querySelector('.sec01').style.display = 'none';
            document.querySelector('.sec02').style.display = 'flex'

            break;

        case '2' :
            document.querySelector('.first').style.display = 'none';
            document.querySelector('.sec01').style.display = 'none';
            document.querySelector('.sec02').style.display = 'none'
            document.querySelector('.sec03').style.display = 'flex'

            break;

        case 'end' :
            document.querySelector('.first').style.display = 'none';
            document.querySelector('.sec01').style.display = 'none';
            document.querySelector('.sec02').style.display = 'none'
            document.querySelector('.sec03').style.display = 'none'
            document.querySelector('.result').style.display = 'flex'

            break;
    } 
}

function goResult() {
    // form 요소 선택
    const form = document.getElementById('chkData');

    // 선택된 라디오 버튼의 값을 저장할 객체
    const selectedValues = {};

    // 각 라디오 버튼에 접근하여 체크된 값을 저장
    const radioButtons = form.querySelectorAll('input[type=radio]:checked');
    radioButtons.forEach(radioButton => {
        selectedValues[radioButton.name] = radioButton.value;
    });

    // 결과 페이지로 이동
    nextPage('end');

    // JSON 형식으로 변환하여 변수에 담기
    const jsonData = JSON.stringify(selectedValues);

    // 변수에 담긴 JSON 데이터 콘솔에 출력
    console.log(jsonData);

    document.querySelector('.result').innerHTML = jsonData; 
}
