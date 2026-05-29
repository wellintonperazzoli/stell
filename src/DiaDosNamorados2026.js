import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import personagemPNG from "./img/game/personagem.png"
import finalPNG from "./img/game/final.png"


const INITIAL_MAZE_MAP = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 4, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 4, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 4, 1, 1, 0, 4, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const VIEW_RADIUS = 3;

const questions = [
  { 
    question: "Em qual data viajamos para gramado?", 
    options: [
      "17/05/2025", 
      "17/05/2026", 
      "17/04/2026", 
      "17/04/2025"
    ], 
    answer: "17/04/2025" 
  },
  { 
    question: "Qual o nome da fonte que colocamos o cadeado em gramado?", 
    options: [
      "Fonte do amor de gramado", 
      "Fonte dos namorados", 
      "Fonte do amor eterno", 
      "Fonte da paixão"
    ], 
    answer: "Fonte do amor eterno" 
  },
  { 
    question: "Qual o nome da flor de ferro que vimos em buenos aires?", 
    options: [
      "La flor delamor", 
      "Floralis genérica", 
      "Floralis de las Naciones Unides", 
      "Buenas Flores"
    ], 
    answer: "Floralis genérica" 
  },
  { 
    question: "Você e o Well caem numa ilha deserta. Qual deve ser sua maior prioridade?", 
    options: [
      "Procurar comida e água", 
      "Criar um sinal de socorro", 
      "Procurar os melhor spots para se pegar com o well", 
      "Curtir o momento"
    ], answer: "Procurar os melhor spots para se pegar com o well" 
  },
  { 
    question: "Em quantos parques de diversões fomos nos Estados Unidos?", 
    options: [
      "5", 
      "6", 
      "7", 
      "8"
    ], answer: "7" 
  },
  { 
    question: "Você e o Well caem numa ilha deserta. Qual deve ser sua maior prioridade?", 
    options: [
      "Procurar comida e água", 
      "Criar um sinal de socorro", 
      "Procurar os melhor spots para se pegar com o well", 
      "Curtir o momento"
    ], answer: "Procurar os melhor spots para se pegar com o well" 
  },
  { 
    question: "Em qual cidade ficava a cabana que passamos o final de semana?", 
    options: [
      "Quatro barras", 
      "Curitiba", 
      "Campina grande do sul", 
      "Colombo"
    ], answer: "Campina grande do sul" 
  },
  { 
    question: "Qual foi a viagem mais em cima da hora que fizemos?", 
    options: [
      "Buenos Aires", 
      "Cabana", 
      "Estancia Betanea", 
      "Florianópolis"
    ], answer: "Estancia Betanea" 
  },
  { 
    question: "Concorda em ter que sentar na cara do well para passar para a próxima fase?", 
    options: [
      "Sim", 
      "Não", 
    ], answer: "Sim" 
  },
];

// Encontra a posição inicial uma única vez fora do componente
let initialStartX = 1, initialStartY = 1;
INITIAL_MAZE_MAP.forEach((row, y) => {
  row.forEach((val, x) => {
    if (val === 2) {
      initialStartY = y;
      initialStartX = x;
    }
  });
});

const DiaDosNamorados2026 = () => {
  // Estado inicial usa map() no array para criar uma cópia limpa e mais rápida que JSON.parse(JSON.stringify())
  const [mazeMap, setMazeMap] = useState(() => INITIAL_MAZE_MAP.map(row => [...row]));
  const [playerPos, setPlayerPos] = useState({ x: initialStartX, y: initialStartY });
  const [questionAnswered, setQuestionAnswered] = useState(0);

  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [trapOpen, setTrapOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [pendingPos, setPendingPos] = useState(null);

  const player = (
    <img
      src={personagemPNG}
      alt="personagem"
      style={{
        width: "35px",
        height: "35px",
      }}
    />
  )
  const prize = (
    <img
      src={finalPNG}
      alt="final"
      style={{
        width: "35px",
        height: "35px",
      }}
    />
  )


  const restartGame = () => {
    setMazeMap(INITIAL_MAZE_MAP.map(row => [...row]));
    setPlayerPos({ x: initialStartX, y: initialStartY });
    setWon(false);
    setLost(false);
    setTrapOpen(false);
    setPendingPos(null);
  };


  const movePlayer = useCallback(
    (dx, dy) => {
      if (won || lost || trapOpen) return;

      setPlayerPos((prev) => {
        const nextX = prev.x + dx;
        const nextY = prev.y + dy;

        if (nextY >= 0 && nextY < mazeMap.length && nextX >= 0 && nextX < mazeMap[0].length) {
          const tile = mazeMap[nextY][nextX];
          if (tile !== 0) {
            if (tile === 3) {
              setWon(true);
            } else if (tile === 4) {
              if(questionAnswered === questions.length - 1) return { x: nextX, y: nextY };

              const q = questions[questionAnswered];
              setQuestionAnswered(questionAnswered + 1);
              setCurrentQuestion(q);
              setSelectedAnswer("");
              setPendingPos({ x: nextX, y: nextY });
              setTrapOpen(true);
              return prev;
            }
            return { x: nextX, y: nextY };
          }
        }
        return prev;
      });
    },
    [won, lost, trapOpen, mazeMap, questionAnswered]
  );

  const handleAnswerTrap = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setTrapOpen(false);
      setPlayerPos(pendingPos);
      const newMap = [...mazeMap];
      newMap[pendingPos.y] = [...newMap[pendingPos.y]];
      newMap[pendingPos.y][pendingPos.x] = 1;
      setMazeMap(newMap);
      setPendingPos(null);
    } else {
      setTrapOpen(false);
      setLost(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp": movePlayer(0, -1); break;
        case "ArrowDown": movePlayer(0, 1); break;
        case "ArrowLeft": movePlayer(-1, 0); break;
        case "ArrowRight": movePlayer(1, 0); break;
        default: break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [movePlayer]);

  const renderView = () => {
    const grid = [];
    for (let y = -VIEW_RADIUS; y <= VIEW_RADIUS; y++) {
      for (let x = -VIEW_RADIUS; x <= VIEW_RADIUS; x++) {
        const mapY = playerPos.y + y;
        const mapX = playerPos.x + x;
        let tileValue = 0;

        if (mapY >= 0 && mapY < mazeMap.length && mapX >= 0 && mapX < mazeMap[0].length) {
          tileValue = mazeMap[mapY][mapX];
        }

        grid.push({
          x: mapX,
          y: mapY,
          val: tileValue,
          isPlayer: x === 0 && y === 0,
          key: `${x}-${y}`,
        });
      }
    }
    return grid;
  };

  const getTileStyle = (tile) => {
    if (tile.isPlayer) {
      return {
        backgroundColor: "#f3e5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        zIndex: 2,
      };
    }
    switch (tile.val) {
      case 0: return { backgroundColor: "#4a148c" };
      case 1: return { backgroundColor: "#f3e5f5" };
      case 2: return { backgroundColor: "#e1bee7" };
      case 3:
      case 4:
        return {
          backgroundColor: "#f3e5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        };
      default: return { backgroundColor: "#4a148c" };
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        px: 2,
        py: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          mb: 5,
          mt: 2,
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "24px",
          p: 4,
          boxShadow: "0 8px 32px rgba(123, 31, 162, 0.15)",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom className="title-text" sx={{ fontWeight: "bold" }}>
          Stellabirinto 🗺️
        </Typography>

        {won ? (
          <Box sx={{ p: 4, background: "#f3e5f5", borderRadius: "16px", mt: 3, mb: 3 }}>
            <Typography variant="h5" sx={{ color: "#4a148c", fontWeight: "bold" }}>
              Você chegou! 🎉✨
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#6a1b9a" }}>
              Você me encontrou!!! Tire foto dessa tela e do seguinte código para o próximo passo: EUAMOAMAZON
            </Typography>
            <Button
              variant="contained"
              onClick={restartGame}
              sx={{ mt: 3, backgroundColor: "#4a148c", "&:hover": { backgroundColor: "#6a1b9a" } }}
            >
              Jogar Novamente
            </Button>
          </Box>
        ) : lost ? (
          <Box sx={{ p: 4, background: "#ffebee", borderRadius: "16px", mt: 3, mb: 3 }}>
            <Typography variant="h5" sx={{ color: "#c62828", fontWeight: "bold" }}>
              Você caiu na armadilha e perdeu! LOOOOOOOOOSER
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#b71c1c" }}>
              Infelizmente a resposta estava errada.
            </Typography>
            <Button
              variant="contained"
              onClick={restartGame}
              sx={{ mt: 3, backgroundColor: "#c62828", "&:hover": { backgroundColor: "#e53935" } }}
            >
              Recomeçar
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant="body1" component="p" className="subtitle-text" sx={{ mb: 4 }}>
              Quero só ver um labirinto desvendar um outro... cuidado com as armadilhas!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Paper
                elevation={4}
                sx={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${VIEW_RADIUS * 2 + 1}, 40px)`,
                  gridTemplateRows: `repeat(${VIEW_RADIUS * 2 + 1}, 40px)`,
                  gap: "2px",
                  background: "rgba(123, 31, 162, 0.3)",
                  padding: "4px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {renderView().map((tile) => (
                  <Box
                    key={tile.key}
                    sx={{
                      width: "40px",
                      height: "40px",
                      transition: "background-color 0.2s ease",
                      ...getTileStyle(tile),
                    }}
                  >
                    {tile.isPlayer ? player : (!tile.isPlayer && tile.val === 3 ? prize : "")}
                  </Box>
                ))}
              </Paper>

              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: 1, mt: 4, mb: 2 }}>
                <Box />
                <IconButton onClick={() => movePlayer(0, -1)} sx={{ background: "#e1bee7", color: "#4a148c", "&:hover": { background: "#ce93d8" } }}>
                  <KeyboardArrowUpIcon fontSize="large" />
                </IconButton>
                <Box />
                <IconButton onClick={() => movePlayer(-1, 0)} sx={{ background: "#e1bee7", color: "#4a148c", "&:hover": { background: "#ce93d8" } }}>
                  <KeyboardArrowLeftIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={() => movePlayer(0, 1)} sx={{ background: "#e1bee7", color: "#4a148c", "&:hover": { background: "#ce93d8" } }}>
                  <KeyboardArrowDownIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={() => movePlayer(1, 0)} sx={{ background: "#e1bee7", color: "#4a148c", "&:hover": { background: "#ce93d8" } }}>
                  <KeyboardArrowRightIcon fontSize="large" />
                </IconButton>
              </Box>

              <Button
                variant="outlined"
                onClick={restartGame}
                sx={{ mt: 2, color: "#4a148c", borderColor: "#4a148c", borderRadius: "16px" }}
              >
                Recomeçar Jogo
              </Button>
            </Box>
          </>
        )}
      </Box>

      <Button
        component={Link}
        to="/"
        variant="outlined"
        sx={{
          color: "#6a1b9a",
          borderColor: "#6a1b9a",
          borderRadius: "24px",
          padding: "8px 24px",
          fontWeight: "bold",
          textTransform: "none",
          background: "rgba(255, 255, 255, 0.8)",
          "&:hover": { borderColor: "#4a148c", background: "rgba(255, 255, 255, 1)" },
        }}
      >
        Voltar para o Menu
      </Button>

      <Dialog open={trapOpen} disableEscapeKeyDown>
        <DialogTitle>⚠️ Armadilha!</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Você pisou em uma armadilha. Responda corretamente para continuar ou o jogo acabará!
          </Typography>
          {currentQuestion && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">{currentQuestion.question}</Typography>
              <RadioGroup value={selectedAnswer} onChange={(e) => setSelectedAnswer(e.target.value)}>
                {currentQuestion.options.map((opt, i) => (
                  <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
                ))}
              </RadioGroup>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAnswerTrap}
            disabled={!selectedAnswer}
            variant="contained"
            sx={{ backgroundColor: "#4a148c", color: "white" }}
          >
            Responder
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DiaDosNamorados2026;