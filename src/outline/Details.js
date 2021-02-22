import React, { Fragment } from 'react';

// {bullet.outline.map((outline) => {
//   return (
//     <Fragment key={outline.id}>
//       <li>
//         <details>
//           <summary key={outline.id}>
//             {outline.title}
//           </summary>
//           {outline.help.map((help) => {
//             return (
//               <Fragment key={help.title}>
//                 <strong>{help.title}</strong>
//                 {help.text.map((text) => {
//                   return (
//                     <p key={text.id}>
//                       {text.paragraph}
//                     </p>
//                   );
//                 })}
//               </Fragment>
//             );
//           })}
//         </details>
//       </li>
//     </Fragment>
//   );
// })}

export const Details = ({ details }) => {
  console.log(details);

  return details.outline.map((outline) => {
    let hasNoText = false;
    outline.help.forEach((help) => {
      help.text.forEach((text) => {
        if (text.paragraph === '') {
          hasNoText = true;
        }
      });
    });

    return hasNoText ? (
      <li key={outline.id}>
        <span>{outline.title}</span>
      </li>
    ) : (
      <Fragment key={outline.id}>
        <li>
          <details>
            <summary key={outline.id}>{outline.title}</summary>
            {outline.help.map((help) => {
              return (
                <Fragment key={help.title}>
                  <strong>{help.title}</strong>
                  {help.text.map((text) => {
                    return <p key={text.id}>{text.paragraph}</p>;
                  })}
                </Fragment>
              );
            })}
          </details>
        </li>
      </Fragment>
    );
  });
};
