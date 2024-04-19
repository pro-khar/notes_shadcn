import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { useNote } from "@/context/noteContext";
import { Input } from "./ui/input";

function Noteform() {
  const { addNote } = useNote();
  const [text, settext] = useState("");
  const [title, settitle] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (!text) return;
    console.log(title, text);
    addNote({ title, text, isPinned: false });
    settext("");
    settitle("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-1/8 mr-2">New note</Button>
      </DialogTrigger>
      <DialogContent className="h-1/2">
        <DialogTitle className="pb-[-10px]">
          <form onSubmit={add}>
            <Input
              className="text-xl"
              placeholder="Untitled Note"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />

            <Textarea
              className="rounded-lg 2xl:h-[350px] xl:h-[200px] my-3 text-md font-light dark:bg-gray-900 bg-gray-300"
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Add
            </Button>
          </form>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}

export default Noteform;