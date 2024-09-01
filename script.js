let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}





document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');
  const successMessage = document.getElementById('results');
  let selectedCount = 0;
  let selectedItems = [];

  items.forEach(item => {
    item.addEventListener('click', function () {
      const itemText = item.textContent.trim();

      if (!item.classList.contains('selected')) {
        item.classList.add('selected');
        selectedItems.push(itemText);
        selectedCount++;
      } else {
        item.classList.remove('selected');
        selectedItems = selectedItems.filter(i => i !== itemText);
        selectedCount--;
      }

      if (selectedCount === 5) {
        showResult();
      } else {
        successMessage.style.display = 'none';
      }
    });
  });

  function showResult() {
    const firstCondition = selectedItems.includes('Bouncy Skin') || 
                           selectedItems.includes('Clear Pores') ||
                           selectedItems.includes('Wrinkle-free');
    const secondCondition = selectedItems.includes('Healing') || 
                            selectedItems.includes('Nourishment') || 
                            selectedItems.includes('Protection');

    if (firstCondition) {
      successMessage.innerHTML = `
        <div class="box">
          <img src="img/nightSerum.png" alt="night repair serum" class="anr_result">
          <h2>Night Serum</h2>
          <p>This deep- and fast-penetrating face serum harnesses 40 years of pioneering Night Science Research. Skin looks smoother and less lined, younger, healthier—more radiant and even toned</p>
          <button class="add">Add to Cart</button>
        </div>
        <div class="box">
          <img src="img/revitalizingSupreme.png" alt="Revitalizing Supreme Creme" class="rs_result">
          <h2>Revitalizing Supreme+ Creme</h2>
          <p>Boost your skin's bounce and firmness at night-and see a more lifted look. Plump and deeply hydrate firmer skin until morning and beyond, with wrinkles and neck lines visibly reduced.</p>
          <button class="add" data-product="hello">Add to Cart</button>
        </div>
        `;
    } else if (secondCondition) {
      successMessage.innerHTML = `
       <div class="twoboxes"> 
          <div class="box">
            <img src="img/overnightTreatment.png" alt="Overnight Treatment" class="ot_result">
            <h2>Overnight Treatment</h2>
            <p>Get that glow you want. Nourish your skin and achieve that bouncy, wrinkle-free feel all day long</p>
          </div>
          <div class="box">
            <img src="img/revitalizingSupreme.png" alt="Revitalizing Supreme Creme" class="rs_result">
            <h2>Revitalizing Supreme Creme</h2>
            <p>Get that glow you want. Nourish your skin and achieve that bouncy, wrinkle-free feel all day long</p>
          </div>
        </div>`;
    }

    successMessage.style.display = 'flex';
  }
});

