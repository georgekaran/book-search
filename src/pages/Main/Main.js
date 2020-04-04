import React from "react";
import { Button } from "reactstrap";
import "./Main.scss";

import useListPagination from '../../hook/useListPagination';

import Base from "../../components/Base/Base";
import BaseHeader from "../../components/Base/BaseHeader";
import DateHeader from "../../components/Base/DateHeader";

// Table components
import Table from '../../components/Table/Table';
import TableHead from '../../components/Table/TableHead';
import TableHeadRow from '../../components/Table/TableHeadRow';
import TableBody from '../../components/Table/TableBody';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';

const Main = () => {
  const [listPerPage, listTotal] = useListPagination();

  return (
    <div className="main-content bg-gradient-warning">
      <Base>
        <BaseHeader />
        <DateHeader totalResults={listTotal.length} />
        <Table
          pageRequest={{}}
          handlePaginationChange={() => undefined}
        >
          <TableHead>
            <TableHeadRow>Livro</TableHeadRow>
            <TableHeadRow>Autor</TableHeadRow>
            <TableHeadRow>Editora</TableHeadRow>
            <TableHeadRow>Ano</TableHeadRow>
            <TableHeadRow>Ações</TableHeadRow>
          </TableHead>
          <TableBody>
            {listPerPage.length > 0 &&
              listPerPage.map(book => {
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
                        onClick={() => undefined}
                        size="sm"
                        type="button"
                        tooltip="Editar usuário"
                      >
                        <span className="btn-inner--icon">
                          <i className="fas fa-pencil-alt fa-stack-1x" />
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Base>
    </div>
  );
};

export default Main;
