import React from 'react';

const ContactList = () => {
  const listItems = [
    '14 Tottenham Hamilton Street, Liverpoop, England.',
    'info@hello.com',
    'T / (102) 6666 8888',
  ];
  const site = 'www.hello.com';

  return (
    <ul className="pa0">
      {listItems.map(item => (
        <li className="list gray pb4" key={item}>
          {item}
        </li>
      ))}
      <li className="list gray pb4 dim" key={'www.hello.com'}>
        <a href={site} className="white no-underline tracked">
          {site}
        </a>
      </li>
    </ul>
  );
};

export default ContactList;
