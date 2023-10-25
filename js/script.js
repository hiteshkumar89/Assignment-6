window.addEventListener('load', () => {
    const form = document.getElementById('empForm');
    const $ = (id) => document.getElementById(id)
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(`ID: ${$('id').value}`)
      console.log(`Name: ${$('name').value}`)
      console.log(`Extension: ${$('ext').value}`)
      console.log(`Email: ${$('email').value}`)
      console.log(`Department: ${$('department').value}`)
    });
  });
  