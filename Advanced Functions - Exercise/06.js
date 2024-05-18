function solution(command) {
  const data = this;
  data.getUpvotes = function () {
    return obfuscate(data.upvotes);
  };

  data.getDownvotes = function () {
    return obfuscate(data.downvotes);
  };

  data.getTotalVotes = function () {
    return data.upvotes + data.downvotes;
  };
  data.getBalance = function () {
    return data.upvotes - data.downvotes;
  };
  data.getRating = function () {
    if (data.getTotalVotes() < 10) return "new";
    const percentage = data.upvotes / data.getTotalVotes();
    if (percentage > 0.66) return "hot";
    if (data.getBalance() >= 0 && data.getTotalVotes() > 100)
      return "controversial";
    if (data.getBalance() < 0) return "unpopular";
    return "new";
  };

  function obfuscate(votes) {
    return data.getTotalVotes() > 50
      ? votes + Math.ceil(Math.max(data.upvotes, data.downvotes) * 0.25)
      : votes;
  }

  const commands = {
    upvote() {
      data.upvotes++;
    },
    downvote() {
      data.downvotes++;
    },
    score() {
      return [
        data.getUpvotes(),
        data.getDownvotes(),
        data.getBalance(),
        data.getRating(),
      ];
    },
  };

  return commands[command]();
}

let post = {
  id: "5",
  author: "brayan",
  content: "wazaaaaap",
  upvotes: 100,
  downvotes: 100,
};
solution.call(post, "upvote");
solution.call(post, "downvote");
let score = solution.call(post, "score");
for (let i = 0; i < 50; i++) {
  solution.call(post, "downvote");
}
score = solution.call(post, "score");
