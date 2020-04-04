import React, { useState } from "react";
import { Button } from "reactstrap";
import "./Main.scss";

import useListPagination from "../../hook/useListPagination";

import Base from "../../components/Base/Base";
import BaseHeader from "../../components/Base/BaseHeader";
import DateHeader from "../../components/Base/DateHeader";

import Modal from "../../components/Modal/Modal";

// Table components
import Table from "../../components/Table/Table";
import TableHead from "../../components/Table/TableHead";
import TableHeadRow from "../../components/Table/TableHeadRow";
import TableBody from "../../components/Table/TableBody";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";

const Main = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const [listPerPage, listTotal] = useListPagination();

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  return (
    <div className="main-content bg-gradient-warning">
      <Base>
        <BaseHeader />
        <DateHeader totalResults={listTotal.length} />
        <Table pageRequest={{}} handlePaginationChange={() => undefined}>
          <TableHead>
            <TableHeadRow>Livro</TableHeadRow>
            <TableHeadRow>Autor</TableHeadRow>
            <TableHeadRow>Editora</TableHeadRow>
            <TableHeadRow>Ano</TableHeadRow>
            <TableHeadRow>Ações</TableHeadRow>
          </TableHead>
          <TableBody>
            {listPerPage.length > 0 &&
              listPerPage.map((book) => {
                return (
                  <TableRow key={book.isbn}>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.publisher}</TableCell>
                    <TableCell>{book.year}</TableCell>
                    <TableCell>
                      <Button
                        className="btn-icon btn-2"
                        color="success"
                        onClick={() => handleOpenModal(book)}
                        size="sm"
                        type="button"
                        tooltip="Editar usuário"
                      >
                        <span className="btn-inner--icon">
                          <i className="fas fa-info-circle fa-stack-1x" />
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

        <Modal
          book={selectedBook}
          title="Informações adicionais"
          show={modalOpen}
          handleClose={() => setModalOpen(false)}
        ></Modal>
      </Base>
    </div>
  );
};

export default Main;
