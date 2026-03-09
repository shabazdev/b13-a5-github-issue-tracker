const cardModal = getEliment('cardModal');

const showIssueCardModal = async (id) => {
    cardModal.innerHTML = '';
    cardModal.showModal();

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await res.json();
    const card = data.data;

    const statusStyle = card.status === 'open' ? 'bg-[#00A96E]' : 'bg-[#EF4444]';
    const issueDate = new Date(card.createdAt).toLocaleDateString('en-US')
    
    const priorityStyle = {
       high: 'bg-[#EF4444] ',
       low: 'bg-[#9CA3AF]',
       medium: 'bg-[#F59E0B]',
      };
      
    const modal = document.createElement('div');

    modal.innerHTML = `
         <div class="modal-box w-full md:min-w-150">
             <h3 class="text-2xl font-bold">${card.title}</h3>
                <div class="flex sm:flex-row flex-col sm:items-center text-sm sm:gap-5 gap-1 my-3">
                   <li class="${statusStyle} capitalize rounded-full w-20 flex items-center justify-center py-1 text-white font-medium list-none">
                      ${card.status}
                   </li>
                   <li class="list-inside font-medium text-gray-500 capitalize">
                      Opened by ${card.author.replaceAll('_', ' ')}
                   </li>
                   <li class="list-inside font-medium text-gray-500">${issueDate}</li>
                </div>
             <!-- card badges -->
             <div class="flex items-center flex-wrap gap-2 mt-4 py-1">
                ${card.labels.map((l) =>
                    `<div class="px-3 py-1 rounded-full font-medium badge-sm uppercase ${labelStyles[l.replaceAll(' ', '_')].color}">
                        ${labelStyles[l.replaceAll(' ', '_')].icon} ${l}
                     </div>`).join('')
                }
             </div>
             <p class="text-gray-500 text-sm py-5">${card.description}</p>
             <div class="bg-[#F8FAFC] p-3">
                <div class="flex items-start justify-between">
                     <h2 class="flex gap-2 items-center text-gray-500">Assignee: 
                        <span class="text-zinc-800 font-semibold capitalize">
                           ${removeSpace(card.assignee) === '' ? 'N/A' : card.assignee.replaceAll('_', ' ')}
                        </span>
                     </h2>
                     <h2 class="flex gap-2 items-center text-gray-500">Priority: 
                        <span class="px-5 uppercase py-1 text-sm rounded-full text-white ${priorityStyle[card.priority]}">
                           ${card.priority}
                        </span>
                     </h2>
                </div>
             </div>
             <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn btn-primary px-7">Close</button>
                </form>
             </div>
         </div>
      `;

    cardModal.appendChild(modal);
};
