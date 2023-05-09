var questions = document.querySelector('#subject_box').querySelectorAll('dl')
questions.forEach((q, i) => {
    const title = q.children[0].querySelector('div').innerText
    const answerText = q.children[1].querySelector('label').textContent
    const answerOption = q.children[1].querySelector('a')
    console.log(`${title} 已选择： ${answerText}`)
    answerOption.click()
})
alert('请检查您的选项，根据实际情况修改')