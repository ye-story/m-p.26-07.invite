const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "мама и папа" },
  { id: "2", names: "мама и папа" },
  { id: "3", names: "Анна" },
  { id: "4", names: "Тётя Ира, дядя Игорь, Елизавета, Александр" },
  { id: "5", names: "Кирилл и Янина" },
  { id: "6", names: "Тётя Алла и дядя Володя" },
  { id: "7", names: "Максим, Екатерина и Елизавета" },
  { id: "8", names: "Дядя Витя" },
  { id: "9", names: "Тётя Таня и дядя Петя" },
  { id: "10", names: "Татьяна, Виктор, Ксения, Эльвира" },
  { id: "11", names: "Константин" },
  { id: "12", names: "Ангелина" },
  { id: "13", names: "Ирина Михайловна и Владимир Васильевич" },
  { id: "14", names: "Валентина, Илья, Евгения, Валерия, Артём" },
  { id: "15", names: "Крестная мама Виталина и Дмитрий" },
  { id: "16", names: "Крестный отец Олег, Ольга, Федор" },
  { id: "17", names: "Евгений" },
  { id: "18", names: "Денис и Юлия" },
  { id: "19", names: "Дмитрий, Юлия, Виктория" },
  { id: "20", names: "Дядя Саша и тётя Люда" },
  { id: "21", names: "Мария и Павел" },
  { id: "22", names: "Анастасия и Егор" },
  { id: "23", names: "Тётя Оля" },
  { id: "24", names: "Владислав и Евгения" }
];
const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
