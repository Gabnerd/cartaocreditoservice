import { Router} from  "express";
import { CreateCardController } from "./controllers/CreateCardController";
import { AuthCardService } from "./services/AuthCardService";
import { AuthCardController } from "./controllers/AuthCardController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailCardController } from "./controllers/DetailCardController";

const router = Router();

//-----ROTAS PARA Cartão-----//
router.post("/cartao", new CreateCardController().handle);
router.post("/session", new AuthCardController().handle);
router.get("/cardinfo", isAuthenticated, new DetailCardController().handle);

export {router}; 