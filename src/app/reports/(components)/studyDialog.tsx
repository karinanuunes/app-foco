import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StudyDialog = () => {
  const handleStudy = () => {
    alert("Adicionando estudo");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-orange-800 hover:bg-orange-900">
          Adicionar estudo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar estudo</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-2 mt-4" onSubmit={handleStudy}>
              <span className="text-base">Nome da matéria</span>
              <Input id="studyName" className="flex-1" />
              <span className="text-base">Categoria</span>
              <Input id="category" className="flex-1" />
              <span className="text-base">Tempo esperado</span>
              <Input id="timeToComplete" className="flex-1" type="number" />
              <span className="text-base">Tempo concluído</span>
              <Input id="completedTime" className="flex-1" type="number" />
              <span className="text-base">Prioridade</span>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="baixa">Baixa</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-base">Situação</span>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="concluido">Concluído</SelectItem>
                  <SelectItem value="incompleto">Incompleto</SelectItem>
                </SelectContent>
              </Select>
              <Button
                className="bg-orange-800 hover:bg-orange-900 mt-4"
                type="submit"
              >
                Adicionar
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StudyDialog;
