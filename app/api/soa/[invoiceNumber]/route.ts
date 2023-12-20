import getCurrentUser from "@/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismadb"

interface Params {
  invoiceNumber: string
}
export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const currentUser = await getCurrentUser()
    const { invoiceNumber } = params

    const invoice_info = await prisma.client_invoice_info.findFirst({
      where: {
        Invoice_No: invoiceNumber,
      },
    })

    const newBilling = await prisma.client_newbillreceipt_print.findFirst({
      where: {
        Statement_Date: invoice_info?.Date_log,
        ClientName: currentUser?.ClientName,
      },
    })

    const soaHistory = await prisma.client_soa_history.findFirst({
      where: {
        SeriesNumber: invoiceNumber,
        Type: "Payment",
      },
    })

    return NextResponse.json({
      billing: {
        AccountNumber: currentUser.OfficialAccountNumber,
        ...newBilling,
        PaidAmount: soaHistory?.Payment,
        PR_Invoice: soaHistory?.PR_Invoice,
      },
    })
  } catch (e: any) {
    console.log
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
