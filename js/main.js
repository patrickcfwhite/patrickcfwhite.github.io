/* eslint-disable quotes */
const bio = "Hi my name is Patrick and I am currently studying at General Assembly on the Software Engineering Immersive course."

document.getElementById('bio').innerText = bio
// document.getElementById('skillbio').innerText = lorem

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      &&
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target)
          $target.focus()
          if ($target.is(':focus')) { // Checking if the target was focused
            return false
          } else {
            $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
            $target.focus() // Set focus again
          }
        })
      }
    }
  })


var nav = $('.nav')
var stickyDiv = 'sticky'

$(window).scroll(function () {
  if ($(this).scrollTop() > 108) {
    nav.addClass(stickyDiv)
  } else {
    nav.removeClass(stickyDiv)
  }
})

var activeurl = $('#activeurl')
var gmailurl = $('#gmailurl')
var linkedin = $('#linkedin')
var twitter = $('#twitter')
var github = $('#github')
var gmail = $('#gmail')

$(linkedin).on('mouseover', function () {
  $(activeurl).removeClass('email')
  $(activeurl).text('linkedin.com/')
  $(activeurl).addClass('active')
})
$(linkedin).on('mouseout', function () {
  $(activeurl).addClass('email')
})

$(github).on('mouseover', function () {
  $(activeurl).removeClass('email')
  $(activeurl).text('github.com/')
  $(activeurl).addClass('active')
})
$(github).on('mouseout', function () {
  $(activeurl).addClass('email')
})

$(twitter).on('mouseover', function () {
  $(activeurl).removeClass('email')
  $(activeurl).text('twitter.com/')
  $(activeurl).addClass('active')
})
$(twitter).on('mouseout', function () {
  $(activeurl).addClass('email')
})

$(gmail).on('mouseover', function () {
  $(gmailurl).removeClass('email')
  $(gmailurl).addClass('active')
})
$(gmail).on('mouseout', function () {
  $(gmailurl).addClass('email')
})