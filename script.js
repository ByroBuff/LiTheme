function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  

if (window.location.href.includes("https://www.chess.com"))
  chrome.storage.sync.get(
    { pieceTheme: 'none', boardTheme: 'none'},
    (items) => {
      piece = items.pieceTheme;
    board = items.boardTheme;
        if (piece == "none") return;
      addStyle(`
      .piece.wp, .promotion-piece.wp {
          background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/wP.svg") !important; 
      }
        .piece.wn, .promotion-piece.wn {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/wN.svg") !important;
        }
        .piece.wb, .promotion-piece.wb {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/wB.svg") !important;
        }
        .piece.wr, .promotion-piece.wr {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/wR.svg") !important;
        }
        .piece.wq, .promotion-piece.wq {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/wQ.svg") !important;
        }
        .piece.wk, .promotion-piece.wk {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/wK.svg") !important;
        }
        .piece.bp, .promotion-piece.bp {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/bP.svg") !important;
        }
        .piece.bn, .promotion-piece.bn {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/bN.svg") !important;
        }
        .piece.bb, .promotion-piece.bb {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/bB.svg") !important;
        }
        .piece.br, .promotion-piece.br {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/bR.svg") !important;
        }
        .piece.bq, .promotion-piece.bq {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/bQ.svg") !important;
        }
        .piece.bk, .promotion-piece.bk {
            background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${piece}/bK.svg") !important;
        }
      `);

        if (board == "none") return;
        svgs = ["blue", "brown", "green", "ic", "purple"]
        if (!svgs.includes(board)) {

            addStyle(`
            .board, .fade-in-overlay {
                background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/${board}.jpg") !important;
            }
            `);
        } else {
            addStyle(`
            .board, .fade-in-overlay {
                background-image: url("https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/svg/${board}.svg") !important;
            }
            `);
        }

    }
  );

  