import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const reach = loadStdlib()
const fmt = (x) => reach.formatCurrency(x, 4)
const b2N = (x) => reach.bigNumberToNumber(x)
let ctcInfo = undefined
let uCtc = undefined

const sBal = reach.parseCurrency(100)
const admin = await reach.newTestAccount(sBal)
admin.setDebugLabel('admin')
console.log('[+] admin account created')

const user = await reach.newTestAccount(sBal)
user.setDebugLabel('user')
console.log('[+] user account created')

const callAPI = async (x) => {
	let tCtc = uCtc == undefined ? user.contract(backend, ctcInfo) : uCtc
	try {
        const call = await tCtc.apis.call()
        console.log(`call: ${call}`)
	} catch (error) {
		console.log({ error })
	}
}

const ctc = admin.contract(backend)

ctc.p.A({
	deployed: async (contract) => {
		ctcInfo = contract
		await callAPI()
	},
	call: async () => await callAPI(),
})
