import NoteCard from "@/components/NoteCard";
import NotesHeader from "@/components/NotesHeader";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-5">
      <NotesHeader />
      <div className="grid py-5 gap-5 md:grid-cols-4">
        <NoteCard isFolder={true} collection={13} filename="maths.pdf" title="Mathamatics Notes" />
        <NoteCard isFolder={false} filename="maths.pdf" title="Chemistry Notes" />
        <NoteCard isFolder={true} collection={23} filename="maths.pdf" title="Biology Notes" />
        <NoteCard isFolder={false} filename="maths.pdf" title="Computer Science Notes" />
        <NoteCard isFolder={true} collection={23} filename="maths.pdf" title="Mathamatics Notes" />
      </div>
    </div>
  );
};

export default page;
