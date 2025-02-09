let radius = document.getElementById("radius")
function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	let r = parseFloat(radius.value)
	let v = (4/3)*Math.PI*Math.pow(r,3)
	let volume = document.getElementById("volume")
	volume.value = v.toFixed(4)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
