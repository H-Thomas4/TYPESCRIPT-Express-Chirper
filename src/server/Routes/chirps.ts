import * as express from 'express';
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utilites/chirpstore";

const router: express.Router = express.Router();


router.get('/:id?', (req: express.Request, res: express.Response) => {
    let id: string = req.params.id;
    const data = GetChirp(id)
    const chirp = {
        id: id,
        username: data.username,
        message: data.message
    }
    res.send(JSON.stringify(chirp));
});

router.post('/', (req: express.Request, res: express.Response) => {
    CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    let chirpMsg: chirp ={
        username: req.body.username,
        message: req.body.message
    }
    UpdateChirp(id, chirpMsg);
    res.sendStatus(200);

});

router.delete('/:id', (req: express.Request, res: express.Response) => {
    let id = req.params.id;
    DeleteChirp(id);
    res.sendStatus(200);
});

interface chirp {
    username: string,
    message: string
}
export default router;