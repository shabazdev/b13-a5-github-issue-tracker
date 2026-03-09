const getEliment = (id) => document.getElementById(id);
const removeSpace = (text) => text.trim().replaceAll(' ', '');

const loadingSpinner = (isLoading) => {
    const spinner = getEliment('loadingSpinner');
    if(isLoading) {
        spinner.classList.remove('hidden')
        spinner.classList.add('flex')
    } else{
        spinner.classList.add('hidden')
        spinner.classList.remove('flex')
    }
}
const issueNotFound = (isFound) => {
    const notFound = getEliment('issueNotFound');
    if(!isFound) {
        notFound.classList.add('hidden')
        notFound.classList.remove('flex')
    } else{
        notFound.classList.remove('hidden')
        notFound.classList.add('flex')
    }
}

const priorityStyle = {
    high: 'bg-[#FEECEC] text-[#EF4444]',
    low: 'bg-[#EEEFF2] text-[#9CA3AF]',
    medium: 'bg-[#FFF6D1] text-[#F59E0B]',
};

const labelStyles = {
    bug: {
        color: 'bg-[#FEECEC] text-[#EF4444] border border-[#FECACA]',
        icon: `<i class="fa-solid fa-bug"></i>`
    },
    help_wanted: {
        color: 'bg-[#FFF8DB] text-[#D97706] border border-[#FDE68A]',
        icon: `<i class="fa-solid fa-hands-helping"></i>`
    },
    enhancement: {
        color: 'bg-[#DEFCE8] text-[#00A96E] border border-[#BBF7D0]',
        icon: `<i class="fa-solid fa-rocket"></i>`
    },
    good_first_issue: {
        color: 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]',
        icon: `<i class="fa-solid fa-seedling"></i>`
    },
    documentation: {
        color: 'bg-[#F3E8FF] text-[#9333EA] border border-[#E9D5FF]',
        icon: `<i class="fa-solid fa-book"></i>`
    },
};


const issueCard = (item) => {
    const card = document.createElement('div');
    const cardBorderStyle = item.status === 'open' ? '#00A96E' : '#A855F7'; 
    const cardStatusIcon = item.status === 'open' ? '../assets/Open-Status.png' : '../assets/Closed-Status.png'
    const issueDate = new Date(item.createdAt).toLocaleDateString('en-US')
    card.className = `card w-full bg-base-100 card-xs shadow-sm hover:-translate-y-1 ease-in-out duration-300 
                      border-t-3 p-4 border-[${cardBorderStyle}]`;

    card.innerHTML = `
      <div class="card-body" onclick="showIssueCardModal('${item.id}')">
          <!-- card top -->
          <div class="flex items-center gap-2 justify-between w-full">
              <img src=${cardStatusIcon} alt="Status" class="size-7" />
              <div class="uppercase py-1 font-medium text-[12px] px-7 rounded-full ${priorityStyle[item.priority]}">
                  ${item.priority}
              </div>
          </div>

          <!-- card middle -->
          <div class="py-3 border-b border-gray-200">
              <h2 class="font-semibold text-xl">${item.title}</h2>
              <p class="text-gray-500 text-sm text-ellipsis font-medium mt-2">
                ${item.description.length > 80 ? item.description.slice(0, 80) + '...' : item.description}
              </p>

              <!-- card badges -->
              <div class="flex items-center flex-wrap gap-2 mt-4 py-1">
                  ${item.labels
                      .map((l) =>
                        `<div class="px-3 py-1 rounded-full font-medium badge-sm uppercase ${labelStyles[l.replaceAll(' ', '_')].color}">
                            ${labelStyles[l.replaceAll(' ', '_')].icon} ${l}
                        </div>`).join('')
                  }
              </div>
          </div>

          <!-- card bottom -->
          <div class="mt-2">
              <h2 class="font-medium text-[14px] text-gray-500">#${item.id} by ${item.author}</h2>
              <h2 class="font-medium text-[14px] text-gray-500">${issueDate}</h2>
          </div>
      </div>`;

    return card;
};
