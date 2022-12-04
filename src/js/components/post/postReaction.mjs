export function postReaction(reactions, container) {
  const reactionsSortedByCount = reactions.sort((a, b) => {
    return b.count - a.count;
  });
  reactions.forEach(({ symbol, count, postId }) => {
    container.innerHTML += `
      <button 
        class="btn btn-light text-dark btn-react"
        style="width: fit-content;"
        data-react-symbol="${symbol}"
        data-react-postId="${postId}"
      >
        <span class="align-top">${symbol} <span data-reaction-count>${count}</span></span>
      </button>
    `;
  });
}
