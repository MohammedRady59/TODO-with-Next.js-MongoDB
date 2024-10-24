"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/Interface";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Spinner from "./Spinner";
import { useState } from "react";
import { deleteTodosAction } from "@/actions/todoAction";
import UpdateTodo from "./UpdateTodo";

interface IProps {
  todos: ITodo[];
}
function TableTodo({ todos }: IProps) {
  const [loading, setLoading] = useState(false);
  const [idItem, setId] = useState("");
  return (
    <>
      <Table className="mt-4">
        <TableCaption>A list of your todosa.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>TITLE</TableHead>
            <TableHead className="uppercase">completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.length == 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No Todo Yet
              </TableCell>
            </TableRow>
          ) : (
            todos.map((el) => (
              <TableRow key={el.id}>
                <TableCell className="font-medium">{el.id}</TableCell>
                <TableCell>{el.title}</TableCell>
                <TableCell>
                  {el.completed ? (
                    <Badge>Completed</Badge>
                  ) : (
                    <Badge variant={"secondary"}>UnCompleted</Badge>
                  )}
                </TableCell>
                <TableCell className="flex space-x-2 items-center justify-end">
                  <div>
                    <UpdateTodo myTodo={el} />
                  </div>
                  <Button
                    variant={"destructive"}
                    onClick={async () => {
                      setId(el.id);
                      setLoading(true);
                      await deleteTodosAction(el.id);
                      setLoading(false);
                      setId("");
                    }}
                  >
                    {loading && el.id === idItem ? <Spinner /> : <Trash />}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

export default TableTodo;
