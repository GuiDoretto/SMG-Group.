// Verifica se o título da página é igual ao título da página inicial
if (document.title === 'Home') {
    // Exibe o alerta
    alert('Bem-vindo à página inicial!');
}

// Slide
var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    
    function showSlide(slideIndex) {
      slides[currentSlide].classList.remove('active');
      slides[slideIndex].classList.add('active');
      currentSlide = slideIndex;
    }
    
    function nextSlide() {
      var nextSlideIndex = (currentSlide + 1) % slides.length;
      showSlide(nextSlideIndex);
    }
    
    // Mostra o primeiro slide
    showSlide(0);
    
    // Alterna para o próximo slide a cada 3 segundos
    setInterval(nextSlide, 3000);

    //Formulario
    
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o envio padrão do formulário

      // Obter os valores dos campos de e-mail e senha
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Limpar os campos do formulário após o envio
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    });

