import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve adicionar o primeiro comentário corretamente', () => {
        render(<PostComments />);
        
        // Encontra o textarea do formulário usando data-testid
        const textarea = screen.getByTestId('comment-textarea');

        // Simula a digitação e envio do primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Que incrível! Adoraria ter uma miniatura dessa na minha coleção!' } });
        fireEvent.submit(screen.getByTestId('comment-submit'));

        // Verifica se o primeiro comentário foi renderizado
        expect(screen.getByText('Que incrível! Adoraria ter uma miniatura dessa na minha coleção!')).toBeInTheDocument();
    });

    it('Deve adicionar o segundo comentário corretamente', () => {
        render(<PostComments />);
        
        // Encontra o textarea do formulário usando data-testid
        const textarea = screen.getByTestId('comment-textarea');

        // Simula a digitação e envio do segundo comentário
        fireEvent.change(textarea, { target: { value: 'O detalhamento é impressionante! Parece muito fiel ao Batmóvel dos filmes.' } });
        fireEvent.submit(screen.getByTestId('comment-submit'));

        // Verifica se o segundo comentário foi renderizado
        expect(screen.getByText('O detalhamento é impressionante! Parece muito fiel ao Batmóvel dos filmes.')).toBeInTheDocument();
    });
});
