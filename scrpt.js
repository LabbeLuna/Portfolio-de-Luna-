<script>
  const gifts = [
    "🎓 Pédagogie : j’aime transmettre, expliquer et accompagner les élèves dans leurs apprentissages.",
    "💡 Créativité : je sais proposer des idées originales et ludiques pour apprendre autrement."
  ];

  function showGift(index) {
    document.getElementById("gift-text").textContent = gifts[index];
  }
</script>

const bars = document.querySelectorAll(".progress");

bars.forEach(bar => {
  const level = bar.getAttribute("data-level");
  setTimeout(() => {
    bar.style.width = level + "%";
  }, 300);
});

