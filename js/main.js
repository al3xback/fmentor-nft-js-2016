const cardEl = document.querySelector('.card');

/* Array includes() */
const ids = ['3426', '3427', '3428', '3429', '3430'];

const titleId = '3429';
const isTitleIdIncluded = ids.includes(titleId);

const cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.style.display = isTitleIdIncluded ? 'initial' : 'none';
cardTitleIdEl.textContent = isTitleIdIncluded ? `#${titleId}` : '';

/* Exponentiation (**) */
const ethereumAmount = Math.round(0.2 ** 2 * 1000) / 1000 + 0.001;
const remainingTime = 3 ** 1;

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector(
	'span'
).textContent = `${ethereumAmount} ETH`;
cardStatusItemEls[1].querySelector(
	'span'
).textContent = `${remainingTime} days left`;
