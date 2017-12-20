// Interface for the Blockchain Object of BlockCypher
// Info on https://www.blockcypher.com/dev/bitcoin/?javascript#address
export interface IAddress {
    hash160: string;
    address: string;
    n_tx: number;
    n_unredeemed: number;
    total_received: number;
    total_sent: number;
    final_balance: number;
}
