const saveOptions = () => {
    const piece = document.getElementById('pieceTheme').value;
    const board = document.getElementById('boardTheme').value;
  
    chrome.storage.sync.set(
      { pieceTheme: piece, boardTheme: board},
      () => {
        const wn = document.getElementById('wn');
        const board = document.getElementById('board');

        pieceNames = ["wn", "wn2", "wr", "wr2", "wb", "wb2", "wq", "wk", "wp1", "wp2", "wp3", "wp4", "wp5", "wp6", "wp7", "wp8", "bp1", "bp2", "bp3", "bp4", "bp5", "bp6", "bp7", "bp8", "bn", "bn2", "br", "br2", "bb", "bb2", "bq", "bk"]
        pieceLichessNames = ["wN", "wN", "wR", "wR", "wB", "wB", "wQ", "wK", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "bN", "bN", "bR", "bR", "bB", "bB", "bQ", "bK"]

        pieceNames.forEach((pieceName, index) => {
            document.getElementById(pieceName).style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${pieceTheme.value}/${pieceLichessNames[index]}.svg")`;
        });



        svgs = ["blue", "brown", "green", "ic", "purple", "pink"]
        pngs = ["pink-pyramid", "purple-diag", "newspaper", "green-plastic", "ncf-board"]
        if (svgs.includes(boardTheme.value)) {   
            board.style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/svg/${boardTheme.value}.svg")`;
        } else if (pngs.includes(boardTheme.value)) {
            board.style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/${boardTheme.value}.png")`;
        } else {
            board.style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/${boardTheme.value}.jpg")`;
        }
});
  };

  const restoreOptions = () => {
    chrome.storage.sync.get(
      { pieceTheme: 'maestro', boardTheme: 'wood4'},
      (items) => {
        document.getElementById('pieceTheme').value = items.pieceTheme;
        document.getElementById('boardTheme').value = items.boardTheme;
        
        pieceNames = ["wn", "wn2", "wr", "wr2", "wb", "wb2", "wq", "wk", "wp1", "wp2", "wp3", "wp4", "wp5", "wp6", "wp7", "wp8", "bp1", "bp2", "bp3", "bp4", "bp5", "bp6", "bp7", "bp8", "bn", "bn2", "br", "br2", "bb", "bb2", "bq", "bk"]
        pieceLichessNames = ["wN", "wN", "wR", "wR", "wB", "wB", "wQ", "wK", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "bN", "bN", "bR", "bR", "bB", "bB", "bQ", "bK"]

        pieceNames.forEach((pieceName, index) => {
            document.getElementById(pieceName).style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${pieceTheme.value}/${pieceLichessNames[index]}.svg")`;
        });

        svgs = ["blue", "brown", "green", "ic", "purple", "pink"]
        pngs = ["pink-pyramid", "purple-diag", "newspaper", "green-plastic", "ncf-board"]
        if (svgs.includes(items.boardTheme)) {   
            document.getElementById('board').style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/svg/${items.boardTheme}.svg")`;
        } else if (pngs.includes(items.boardTheme)) {
            document.getElementById('board').style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/${items.boardTheme}.png")`;
        } else {
            document.getElementById('board').style.backgroundImage = `url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/${items.boardTheme}.jpg")`;
        }
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);