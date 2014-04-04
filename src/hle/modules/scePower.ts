﻿module hle.modules {
    export class scePower {
        constructor(private context: EmulatorContext) { }

		private cpuFreq = 222;
		private pllFreq = 222;
		private busFreq = 111;

		scePowerGetCpuClockFrequencyInt = createNativeFunction(0xFDB5BFE9, 150, 'int', '', this, () => this.cpuFreq);
		scePowerRegisterCallback = createNativeFunction(0x04B7766E, 150, 'int', '', this, (slotIndex: number, callbackId: number) => {
			console.warn("Not implemented scePowerRegisterCallback");
			return 0;
		});

		scePowerSetClockFrequency = createNativeFunction(0x737486F2, 150, 'int', 'int/int/int', this, (pllFrequency: number, cpuFrequency: number, busFrequency: number) => {
			this.pllFreq = pllFrequency;
			this.cpuFreq = cpuFrequency;
			this.busFreq = busFrequency;
			return 0;
		});
    }
}
