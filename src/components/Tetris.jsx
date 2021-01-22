import React, { useState } from 'react';
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = () => {
    const [dromTime,setDropTime] = useState(null);
    const [gameOver,setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage,setStage] = useStage(player);

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? 
                    <Display gameOver={gameOver} text="Game Over" /> :
                    (
                    <div>
                        <Display text="Scroe" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;