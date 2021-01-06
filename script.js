document.getElementById('determine').addEventListener('click', myfunction)
function myfunction () {
  const day = document.getElementById('whatday').value
  const age = document.getElementById('whatage').value
  if ((day !== 'Saturday' && day !== 'Sunday') && (age < 18)) {
    alert('You have school today')
  }
  if ((day !== 'Saturday' && day !== 'Sunday') && (age > 18)) {
    alert('You have work today!')}
  else if (day == 'Saturday' || day == 'Sunday') {
    alert('Relax for the weekend!')}
}
