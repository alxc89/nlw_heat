import { io } from "../app";
import prismaClient from "../prisma";

class CreateMessageServices {
  async execute(texto: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        texto,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      texto: message.texto,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };
    io.emit("new_message", infoWS);
    return message;
  }
}

export { CreateMessageServices };
