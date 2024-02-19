import { Meta, StoryFn } from "@storybook/react";
import Modal, { Props } from "@components/Modale/Modale";
import useToogle from "@hooks/useToogle";
import { X } from "lucide-react";

const meta: Meta = {
  component: Modal,
  tags: ["autodocs"],
};

//TODO: Test Case
// 1: click Button open modale
// 2: click cross close modale
// 3: press esc close modale

export default meta;

const Template: StoryFn<Props> = (args) => {
  const [showModal, toogleModal] = useToogle(false);

  return (
    <>
      <h1 className="text-xl mb-2">Lorem Ipsum</h1>
      <button
        onClick={toogleModal}
        className="bg-orange-300 rounded-md text-neutral-800 px-2 py-1  "
      >
        Show Modal
      </button>
      {showModal && (
        <Modal {...args} closeHandler={toogleModal}>
          <div className="p-5 bg-white w-1/2 relative">
            <h1 className="text-xl">Titre</h1>{" "}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem placeat cum dolorum mollitia unde voluptatum
              dignissimos cumque, eligendi et tempore excepturi? Assumenda saepe
              tempora esse at aliquid dolores fugiat voluptate?
            </p>
            <button
              onClick={toogleModal}
              className="absolute top-2 right-2 text-xl"
            >
              <X />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export const Basic = Template.bind({});
