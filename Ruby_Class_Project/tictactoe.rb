class Game
    WINNING_COMBINATION = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]
    def initialize
        @players = PlayerDetails.new
       
    end

    def playerMove
        @gameEnd = false
        @playerTurnCount=1
        @gameBoard = GameBoard.new
        while @playerTurnCount < 10 

            if(@playerTurnCount % 2 == 1)
            # if @player_turn.odd?
                sequence(@players.player1, "X")
            else 
                sequence(@players.player2, "O")
            end
        end
        
        # @playerTurn.even ? sequence(players.player2,"O")
    end
    # end 

    def sequence(player,sym)
        # @gameBoard.display
        puts "#{player} choose a position"
        @player_move = gets.chomp.to_i

        if (1..9).include?(@player_move)&& @gameBoard.board[@player_move-1]==" " && @gameEnd == false
            @playerTurnCount+=1
            @gameBoard.board_update(@player_move,sym)
            player_win_check
            draw_check
        else 
            puts "Enter a valid input from 1 to 9"
        end
    end

    def player_win_check
        WINNING_COMBINATION.each do |win_check_row|
            if(@gameBoard.board[win_check_row[0]] == @gameBoard.board[win_check_row[1]]) &&
                (@gameBoard.board[win_check_row[1]] == @gameBoard.board[win_check_row[2]]) &&
                ((@gameBoard.board[win_check_row[0]] != " "))
                if(@gameBoard.board[win_check_row[0]] == "X")
                    puts "#{@players.player1} won the game"
                    @playerTurnCount=10
                    @end=true
                    play_again                
                elsif(@gameBoard.board[win_check_row[0]] == "X")
                    puts "#{@players.player2} won the game"
                    @playerTurnCount=10
                    @end=true
                    # @gameBoard.board.clear
                    play_again             
                end
            end
        end
    end
    def draw_check
        if(@playerTurnCount==10 && @end==true)
            puts "Game ended in Draw"
            play_again
        end
    end
    def play_again
        puts "Do you want to play again ? (Y/N)"
        regame = gets.chomp
        if regame=="Y"
            @gameBoard.board.clear
            playerMove
        else
            regame=="N"
            exit
        end
    end
end

class GameBoard
    #creating a grid
    attr_reader :board
    def initialize
        puts "Enter the position number from 1 to 9"

        puts """
            | 1 | 2 | 3 |
            -------------
            | 4 | 5 | 6 |
            -------------
            | 7 | 8 | 9 |
        """
        @board = [" ", " ", " ", " "," ", " ", " "," ", " ", " " ] 
    end
        def display(board)
            puts """
            | #{board[0]}| #{board[1]}| #{board[2]} |
            ---------------
            | #{board[3]} | #{board[4]} | #{board[5]} |
            ---------------
            | #{board[6]} | #{board[7]} | #{board[8]} |
            """
        end

        def board_update(board_pos, sym)
            @board[board_pos-1] = sym
            display(@board)
        end
    end

class PlayerDetails

attr_reader :player1, :player2
    def initialize
        puts "Enter Player 1 name"
        @player1 = gets.chomp
        puts "#{player1} symbol is X "
        puts "Enter Player 2 name"
        @player2 = gets.chomp
        puts "#{player2} symbol is O"
    end
end


newGame = Game.new

newGame.playerMove