const animation = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        el.classList.add('animated');
    });
}

export default animation;   