$(document).ready(function() {

    /* Navigation burger onclick side navigation show */
    $('.burger-container').on('click', function() {
        $('.main-navigation').toggle('slow');

        if($('#myBtn').hasClass('change')) {
            $('body').addClass('stop-scroll');
        } else {
            $('body').removeClass('stop-scroll');
        }
    });

    /* About me slider */
    $('.about-me-slider').slick({
        slidesToShow: 1,
        prevArrow: '<span class="span-arrow slick-prev"><</span>',
        nextArrow: '<span class="span-arrow slick-next">></span>'
    });

    /* Blog slider */
    $('.blog-slider').slick({
        slidesToShow: 2,
        prevArrow: '<span class="span-arrow slick-prev"><</span>',
        nextArrow: '<span class="span-arrow slick-next">></span>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
	
    /* Skill Pagination */
    const itemsPerPage = 3; // Show 3 skills per page
    let currentPage = 1;
    const totalItems = $('#skillsContainer .single-book').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        $('#skillsContainer .single-book').hide().slice(start, end).show();
        
        // Update buttons
        $('#prevBtn').prop('disabled', page === 1);
        $('#nextBtn').prop('disabled', page === totalPages);
    }

    $('#nextBtn').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    $('#prevBtn').click(function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Initial page display for skills
    showPage(currentPage);

});

var counta = 0;

$(window).scroll(function(e){

    /* Onscroll number counter */
    var statisticNumbers = $('.single-count');
    if(statisticNumbers.length) {
        var oTop = statisticNumbers.offset().top - window.innerHeight;
        if (counta == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function() {
                var $this = $(this),
                countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            counta = 1;
        }
    }
})

let currentSlide = 0;
const itemsPerPage = 5; // Display 5 items per page

function nextSkills() {
  const skillsContainer = document.querySelector('.skills-container');
  const skillItems = document.querySelectorAll('.skill-item');
  const totalSlides = Math.ceil(skillItems.length / itemsPerPage);

  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    skillsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  updateButtons();
}

function prevSkills() {
  const skillsContainer = document.querySelector('.skills-container');

  if (currentSlide > 0) {
    currentSlide--;
    skillsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  updateButtons();
}

function updateButtons() {
  document.getElementById('prevBtn').disabled = currentSlide === 0;
  const skillItems = document.querySelectorAll('.skill-item');
  const totalSlides = Math.ceil(skillItems.length / itemsPerPage);
  document.getElementById('nextBtn').disabled = currentSlide >= totalSlides - 1;
}
;
