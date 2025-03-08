import * as React from 'react';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
import img9 from './img/9.jpg'
import img10 from './img/10.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'auto',
  maxHeight: '100%',
  maxWidth: '100%',
  pt: 2,
  px: 4,
  pb: 3,
};

export default function PhotosGrid() {
  const [open, setOpen] = React.useState(null);
  const handleOpen = (index) => {
    setOpen(index);
  };
  const handleClose = () => {
    setOpen(null);
  };


  return (
    <Box sx={{ p: 2 }}>
      <Masonry columns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index} style={{
            textAlign: 'center',
            border: '1px solid rgba(162, 0, 236, 0.6)',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
          }}>
            <div
              style={{
                padding: '5px',
              }}
              
              onClick={() => handleOpen(index)}
            >
              {item.title}
            </div>
            <Button
              onClick={() => handleOpen(index)}
              style={{
                padding: 0,
                borderRadius: 0,
                overflow: 'hidden',
                width: '100%'
              }}
            >
              <img
                srcSet={`${item.img}`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Button>
            <Modal
              open={open === index}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style }}>
                <h2 id="parent-modal-title">{item.title}</h2>
                <p id="parent-modal-description">{item.text}</p>

                <img
                  srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: 10,
                    display: 'block',
                    maxHeight: 400,
                    maxWidth: '100%',
                    margin: 'auto',
                  }}></img>
                <Button onClick={handleClose}>Fechar</Button>
              </Box>
            </Modal>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Ela que quase não adora uma arte',
    text: <>
      <p>A cara de arteira não é só cara! Adora roles aleatórios e atazanar os outros.</p>
      <p>Ritmo gostoso de aproveitar o que é bom da vida sem se preocupar com os outros.</p>
      <p>Ideal para taekwondozistas e judóquistas.</p>
    </>,
  },
  {
    img: img2,
    title: 'Ela que não tem um olhar assassino',
    text: <>
      <p>Vem cá...</p>
      <p>Vem...</p>
      <p>Deixa eu te contar uma coisinha...</p>
    </>,  
  },
  {
    img: img4,
    title: 'Ela que é super criativa',
    text: <>
      <p>Bora montar máscaras de carnaval?</p>
      <p>Bora num parque de cama elástica?</p>
      <p>Bora para uma cabana aleatória no meio do nada?</p>
      <p>Bora pra um resort?</p>
      <p>Bora no parque de diversão?</p>
      <p>Bora andar bebendo por aí?</p>
      <p>Tem algum passeio com voce que é ruim?</p>
    </>, 
  },
  {
    img: img5,
    title: 'Ela que proporciona os melhores momentos',
    text: <>
      <p>Sou muito feliz com sua companhia.</p>
      <p>Sou muito feliz com nossa sincronia.</p>
      <p>Sou muito feliz com nossas conversas.</p>
      <p>Sou muito feliz com a nossa química.</p>
      <p>Sou muito feliz com nossas risadas.</p>
      <p>Sou muito feliz com nossos momentos de silêncio.</p>
      <p>Sou muito feliz com nossos momentos de diversão.</p>
      <p>Sou muito feliz com nossos momentos de carinho.</p>
      <p>Sou muito feliz com nós.</p>
    </>,   
  },
  {
    img: img6,
    title: 'Ela que adora pegar tétano',
    text: <>
      <p>Bora no parque de diversão nesses brinquedos caindo aos pedaços pegar tétano e depois ir na balada?</p>
      <p>- BORA</p>
    </>,   
  },
  {
    img: img7,
    title: 'Ela que quase não gosta de dormir',
    text: <>
      <p>Gosta de dormir mais que 3 pessoas normais juntas? - Sim</p>
      <p>Anda tão lento que parece estar se arrastando? - Também</p>
      <p>Mas quem disse que a vida precisa ser vivida correndo?</p>
      <p>Gosto muito do jeito que leva a vida. Sem pressa, aproveitando os detalhes e vivendo os momentos do seu jeito.</p>
    </>,  
  },
  {
    img: img3,
    title: 'Ela que nem se perde na própria idade',
    text: <>
      <p>Nós temos 3 anos de diferença né?</p>
      <p>- Não, nós temos 4.</p>
      <p>Mas esse ano eu faço 35...</p>
      <p>- Então Stell...</p>
    </>,    
  },
  {
    img: img9,
    title: 'Ela que quase não gosta do caos',
    text: <>
      <p>Bora beber sem comer nada porque é assim que eu gosto do caos.</p>
      <p>MUAHAHAHAHA</p>
    </>,     
  },
  {
    img: img10,
    title: 'Ela que quase não gosta de usar da criatividade',
    text: <>
      <p>Máquiagem, desenho, pintura...</p>
      <p>A maneira que repara no detalhe coisas</p>
      <p>O cuidado que tem com o que faz, independe pra que seja</p>
      <p>Não tem ideia do quanto isso me encanta.</p>
    </>,    
  },
  {
    img: img8,
    title: 'Ela que quase não gosta de fazer pose',
    text: <>
      <p>Ela que é a viciada dos boomerangs e adora fotinhos com pose.</p>
    </>,   
  },
];