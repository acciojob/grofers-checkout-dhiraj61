const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let priceList = Array.from(document.querySelectorAll('.price')).map(item => Number(item.innerText));
let table = document.getElementsByTagName('table');

const getSum = () => {
//Add your code here
    let total = priceList.reduce((acc,curr)=> acc+curr);
	let tr = document.createElement('tr');
	let prtitleTd = document.createElement('td');
	prtitleTd.innerText = 'Total Price';
	tr.appendChild(prtitleTd);
	let pricetd = document.createElement('td');
	// pricetd.classList.add('prices');
	pricetd.innerText = total;
	tr.appendChild(pricetd);
	table[0].appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

