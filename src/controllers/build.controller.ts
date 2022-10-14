import { Controller, Get } from '@nestjs/common';
import { Build } from 'src/models/dtos/build.dto';
import { BuildService } from '../services/build.service';

@Controller('api/v1/build')
export class BuildController {
    constructor(private readonly buildService: BuildService) {

    }

    @Get()
    getBuild(): Build {
        return this.buildService.getBuild();
    }
}
