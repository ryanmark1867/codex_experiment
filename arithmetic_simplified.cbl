            IDENTIFICATION DIVISION.
            PROGRAM-ID. VERBS.
            DATA DIVISION.
              WORKING-STORAGE SECTION.
              01 NUM1 PIC 9(9) VALUE 10.
              01 NUM2 PIC 9(9) VALUE 10.
              01 NUMA PIC 9(9) VALUE 100.
              01 NUMB PIC 9(9) VALUE 15.
              01 NUMC PIC 9(9).
            PROCEDURE DIVISION.
              MULTIPLY NUM1 BY NUM2 GIVING NUMA.
              DIVIDE NUMA BY NUM1 GIVING NUMB.
              ADD NUM1 TO NUM2 GIVING NUMC.
              DISPLAY "NUM1 * NUM2:" NUMA.
              DISPLAY "NUMA / NUM1:" NUMB.			  
              DISPLAY "NUM1 + NUM2:" NUMC.
              STOP RUN.